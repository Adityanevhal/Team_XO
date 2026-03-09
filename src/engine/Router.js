/* ========================================
   Smart City Planner - Route Finder
   ========================================

   Implements simple A* pathfinding over the city grid.  Supports an
   "accessible" mode that heavily penalizes cells without ramps/elevators
   or with narrow sidewalks.
*/

import { distance } from '../utils/helpers.js';

export class Router {
    constructor(cityModel) {
        this.city = cityModel;
    }

    /**
     * Find a path from start to end
     * @param {{x:number,y:number}} start
     * @param {{x:number,y:number}} end
     * @param {Object} options
     * @param {boolean} options.accessible
     * @returns {Array|null} array of {x,y} coords or null if no path
     */
    findPath(start, end, options = {}) {
        const { accessible = false } = options;
        const gridSize = this.city.gridSize;

        const inBounds = (x, y) => x >= 0 && x < gridSize && y >= 0 && y < gridSize;
        const neighbors = (node) => {
            const dirs = [
                { x: 1, y: 0 },
                { x: -1, y: 0 },
                { x: 0, y: 1 },
                { x: 0, y: -1 }
            ];
            return dirs.map(d => ({ x: node.x + d.x, y: node.y + d.y }))
                .filter(n => inBounds(n.x, n.y));
        };

        const openSet = new Set();
        const cameFrom = new Map();
        const gScore = {};
        const fScore = {};

        const key = (p) => `${p.x},${p.y}`;

        const startKey = key(start);
        gScore[startKey] = 0;
        fScore[startKey] = distance(start.x, start.y, end.x, end.y);
        openSet.add(startKey);

        while (openSet.size > 0) {
            // pick node in openSet with lowest fScore
            let currentKey = null;
            let currentF = Infinity;
            for (const k of openSet) {
                if (fScore[k] < currentF) {
                    currentF = fScore[k];
                    currentKey = k;
                }
            }
            const [cx, cy] = currentKey.split(',').map(Number);
            const current = { x: cx, y: cy };

            if (cx === end.x && cy === end.y) {
                // reconstruct path
                const path = [];
                let k = currentKey;
                while (k) {
                    const [px, py] = k.split(',').map(Number);
                    path.unshift({ x: px, y: py });
                    k = cameFrom.get(k);
                }
                return path;
            }

            openSet.delete(currentKey);

            for (const neighbor of neighbors(current)) {
                const nKey = key(neighbor);
                // base cost = 1
                let tentativeG = gScore[currentKey] + 1;

                if (accessible) {
                    const cell = this.city.getZone(neighbor.x, neighbor.y);
                    if (cell) {
                        // penalize if not road/sidewalk or missing ramp
                        if (!cell.accessibility || !cell.accessibility.ramp) {
                            tentativeG += 5;
                        }
                        if (cell.accessibility && cell.accessibility.sidewalkWidth < 1) {
                            tentativeG += 2;
                        }
                    }
                }

                if (gScore[nKey] === undefined || tentativeG < gScore[nKey]) {
                    cameFrom.set(nKey, currentKey);
                    gScore[nKey] = tentativeG;
                    fScore[nKey] = tentativeG + distance(neighbor.x, neighbor.y, end.x, end.y);
                    openSet.add(nKey);
                }
            }
        }

        // no path found
        return null;
    }
}
