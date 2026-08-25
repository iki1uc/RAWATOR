export function RAWATOR_START() {
    if (!window.RAWATOR) return;

    const r = window.RAWATOR;

    console.log("RAWATOR → WAKE MODE");
    console.log("EVO CITY:", r.evo);
    console.log("ATLANTIS TRAVEL:", r.travel);
    console.log("BEAM SIGNALS:", r.beam);

    return true;
}
