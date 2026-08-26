import { AXIOM } from "./axiom.js";

const mana = AXIOM.MANA();
const aura = AXIOM.AURA();
const kraft = AXIOM.KRAFT();

this.vital = (
    mana.pulse() +
    aura.resonance() +
    kraft.impulse()
) / 3;
