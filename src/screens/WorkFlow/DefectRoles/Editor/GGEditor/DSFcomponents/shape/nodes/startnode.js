import React from "react";
import { RegisterNode } from "gg-editor";

class StartNode extends React.Component {
  render() {
    const config = {
      draw(item) {
        const keyShape = this.drawKeyShape(item);

       
        const group = item.getGraphicGroup();
        const model = item.getModel();

        group.addShape("image", {
          attrs: {
            x: -15,
            y: -25,
            width: 30,
            height: 30,
            img: model.icon
          }
        });

        this.drawLabel(item);

        return keyShape;
      },

      anchor: [
        [0.5, 1]
      ]
    };

    return (
      <RegisterNode name="start-node" config={config} extend={"flow-circle"} />
    );
  }
}

export default StartNode;
