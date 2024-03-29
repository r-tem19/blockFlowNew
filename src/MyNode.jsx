import React from "react";
import { Node, Socket, Control } from "rete-react-render-plugin";

export class MyNode extends Node {
  render() {
    const { editor, node, bindSocket, bindControl } = this.props;
    const { outputs, controls, inputs, selected } = this.state;

    // console.log("node");
    // console.log(node);

    const removeNodeHandler = (el) => {
      el.preventDefault();

      node.outputs.forEach((output) => {
        output.connections.map((connection) =>
          editor.removeConnection(connection)
        );
      });
      editor.removeNode(node);
    };

    return (
      <div className={`node ${selected}`} style={{ background: "grey" }}>
        <div className="title">
          {"<<"} {node.name} {">>"}
        </div>
        {/* Outputs */}
        {outputs.map((output) => (
          <div className="output" key={output.key}>
            <div className="output-title">{output.name}</div>
            <Socket
              type="output"
              socket={output.socket}
              io={output}
              innerRef={bindSocket}
            />
          </div>
        ))}
        {/* Controls */}
        {controls.map((control) => (
          <Control
            className="control"
            key={control.key}
            control={control}
            innerRef={bindControl}
          />
        ))}
        {/* Inputs */}
        {inputs.map((input) => (
          <div className="input" key={input.key}>
            <Socket
              type="input"
              socket={input.socket}
              io={input}
              innerRef={bindSocket}
            />
            {!input.showControl() && (
              <div className="input-title">{input.name}</div>
            )}
            {input.showControl() && (
              <Control
                className="input-control"
                control={input.control}
                innerRef={bindControl}
              />
            )}
          </div>
        ))}
        <div>
          <button onClick={removeNodeHandler}>Remove</button>
        </div>
      </div>
    );
  }
}
