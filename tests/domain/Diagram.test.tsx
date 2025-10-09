import { Diagram } from "../../src/domain/Diagram";
import { BufferGate } from "../../src/domain/gates/BufferGate";
import { NotGate } from "../../src/domain/gates/NotGate";
import { Toggle } from "../../src/domain/gates/Toggle";

describe('Diagram', () => {
    it('bla', () => {
        var diagram = new Diagram();
        
        var toggle = new Toggle();
        var buffer = new BufferGate();
        var notGate = new NotGate();
        var endNotGate = new NotGate();

        diagram.addToggle(toggle);
        
        diagram.addGate(buffer);
        diagram.connectNodes(toggle.id, buffer.id);

        diagram.addGate(notGate);
        diagram.connectNodes(buffer.id, notGate.id);

        diagram.addGate(endNotGate);
        diagram.connectNodes(notGate.id, endNotGate.id);

        diagram.simulate();
        
        expect(endNotGate.evaluate()).toBe(true);
    });
});
