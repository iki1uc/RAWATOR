// ============================================================
//  AXIOM · MANA · AURA · KRAFT
//  IKI1UC · SYS3-6-9 · NC-ENGINE · RAWATOR
// ============================================================

export const AXIOM = {

    // ─── 1. MANA ───────────────────────────────────────────────
    // Energiefluss · Lebensenergie · Systemkraft
    MANA(value = 1) {
        return {
            id: "AXIOM-MANA",
            type: "energy",
            flow: value,
            pulse() {
                return this.flow * (0.9 + Math.random() * 0.2);
            }
        };
    },

    // ─── 2. AURA ───────────────────────────────────────────────
    // Feld · Einfluss · Resonanz
    AURA(radius = 3) {
        return {
            id: "AXIOM-AURA",
            type: "field",
            radius,
            resonance() {
                return radius * (0.7 + Math.random() * 0.3);
            }
        };
    },

    // ─── 3. KRAFT ──────────────────────────────────────────────
    // Impuls · Wirkung · Bewegung
    KRAFT(force = 1) {
        return {
            id: "AXIOM-KRAFT",
            type: "impact",
            force,
            impulse() {
                return force * (1.0 + Math.random() * 0.5);
            }
        };
    }
};
