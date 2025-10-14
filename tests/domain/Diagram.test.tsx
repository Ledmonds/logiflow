import { Diagram } from "../../src/domain/Diagram";
import { AndGate } from "../../src/domain/gates/AndGate";
import { BufferGate } from "../../src/domain/gates/BufferGate";
import { NotGate } from "../../src/domain/gates/NotGate";
import { Toggle } from "../../src/domain/gates/Toggle";

describe('Diagram', () => {
    it('simple toggle test', () => {
        var diagram = new Diagram();
        
        var toggle = new Toggle();

        diagram.addGate(toggle);
        diagram.simulate();
        
        expect(toggle.evaluate()).toBe(true);
    });

    it('simple not toggle test', () => {
        var diagram = new Diagram();
        
        var toggle = new Toggle();
        var notGate = new NotGate();

        diagram.addToggle(toggle);
        diagram.addGate(notGate);

        diagram.connectGates(toggle.output, notGate.input);

        diagram.simulate();
        
        expect(toggle.evaluate()).toBe(true);
    });

    it('toggle, buffer, not, not', () => {
        var diagram = new Diagram();
        
        var toggle = new Toggle();
        var buffer = new BufferGate();
        var firstNotGate = new NotGate();
        var secondNotGate = new NotGate();

        diagram.addToggle(toggle);
        diagram.addGate(buffer);
        diagram.addGate(firstNotGate);
        diagram.addGate(secondNotGate);

        diagram.connectGates(toggle.output, buffer.input);
        diagram.connectGates(buffer.output, firstNotGate.input);
        diagram.connectGates(firstNotGate.output, secondNotGate.input);

        diagram.simulate();
        
        expect(toggle.evaluate()).toBe(true);
        expect(buffer.evaluate()).toBe(true);
        expect(firstNotGate.evaluate()).toBe(false);
        expect(secondNotGate.evaluate()).toBe(true);
    });

    it('toggle, toggle, and', () => {
        var diagram = new Diagram();
        
        var toggleA = new Toggle();
        var toggleB = new Toggle();
        var and = new AndGate();

        diagram.addToggle(toggleA);
        diagram.addToggle(toggleB);
        diagram.addGate(and);

        diagram.connectGates(toggleA.output, and.inputA);
        diagram.connectGates(toggleB.output, and.inputB);

        diagram.simulate();
        
        expect(toggleA.evaluate()).toBe(true);
        expect(toggleB.evaluate()).toBe(true);
        expect(and.evaluate()).toBe(true);
    });
});
