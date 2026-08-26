import { HOLO_ENGINE } from "./HOLO.engine.js";

this.init = function() {
    HOLO_ENGINE.init();
};

this.update = function() {
    // Vitalität zuerst aktualisieren
    const manaPulse = mana.pulse();
    const auraPulse = aura.resonance();
    const kraftPulse = kraft.impulse();

    this.vital = (manaPulse + auraPulse + kraftPulse) / 3;

    // HOLO aktualisieren
    HOLO_ENGINE.update({
        vital: this.vital,
        mana: manaPulse,
        aura: auraPulse,
        kraft: kraftPulse
    });
};
