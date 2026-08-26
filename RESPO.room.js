import { HOLO_ROOM } from "./HOLO.room.js";

export const RESPO_ROOM = {

    // HOLO → RESPO Pulse
    holoPulse: () => HOLO_ROOM.pulse,

    // HOLO → RESPO Aura
    holoAura: () => HOLO_ROOM.aura,

    // HOLO → RESPO Kraft
    holoKraft: () => HOLO_ROOM.kraft,

    // HOLO → Vitalität für Reflexe
    holoVital: () => HOLO_ROOM.vital,

    // HOLO → Frame‑Resonanz (81‑Frames)
    holoFrames: () => HOLO_ROOM.frames,

    // RESPO → Zeitstempel
    updated: () => HOLO_ROOM.updated
};
