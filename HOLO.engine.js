// ============================================================
// HOLO · Engine · RAWATOR 81 Erweiterung
// ============================================================

import { AXIOM } from "./axiom.js";
import { HOLO_ROOM } from "./HOLO.room.js";

export const HOLO_ENGINE = {

    init() {
        HOLO_ROOM.frames = [];

        for (let i = 1; i <= 81; i++) {
            HOLO_ROOM.frames.push({
                id: `HOLO-${i}`,
                vital: 0,
                pulse: 0,
                aura: 0,
                kraft: 0
            });
        }

        console.log("HOLO → 81 Frames erzeugt");
    },

    update(rawatorLife) {
        const mana = AXIOM.MANA().pulse();
        const aura = AXIOM.AURA().resonance();
        const kraft = AXIOM.KRAFT().impulse();

        HOLO_ROOM.vital = rawatorLife.vital;
        HOLO_ROOM.pulse = mana;
        HOLO_ROOM.aura = aura;
        HOLO_ROOM.kraft = kraft;
        HOLO_ROOM.updated = Date.now();

        HOLO_ROOM.frames.forEach((f, index) => {
            f.vital = rawatorLife.vital * (0.9 + Math.random() * 0.2);
            f.pulse = mana * (0.8 + Math.random() * 0.4);
            f.aura = aura * (0.7 + Math.random() * 0.3);
            f.kraft = kraft * (0.9 + Math.random() * 0.5);
        });

        console.log("HOLO → Frames aktualisiert");
    },

    get() {
        return HOLO_ROOM;
    }
};
