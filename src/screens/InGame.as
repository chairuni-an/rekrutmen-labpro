/**
 * Created by Bervianto Leo P on 04/07/2016.
 */
package screens {
import draggable.DragSource;
import draggable.DropTarget;

import feathers.controls.Button;
import feathers.controls.Label;
import feathers.dragDrop.IDragSource;
import feathers.dragDrop.IDropTarget;

import starling.core.Starling;
import starling.display.Quad;
import starling.display.Sprite;
import starling.events.Event;

public class InGame extends Sprite implements IDragSource, IDropTarget {

    private var isHardwareRendering:Boolean;

    private static const DRAG_FORMAT:String = "draggableQuad";

    private var _draggableQuad:Quad;
    private var _dragSource:DragSource;
    private var _dropTarget:DropTarget;
    private var _resetButton:Button;

    public function InGame() {
        super();

        isHardwareRendering = Starling.context.driverInfo.toLowerCase().indexOf("software") == -1;

        this.addEventListener(Event.ADDED_TO_STAGE, onAddedToStage);
        this.visible = false;
    }

    private function reset():void {
        this._draggableQuad.x = 40;
        this._draggableQuad.y = 40;
        this._dragSource.addChild(this._draggableQuad);
    }


    private function onAddedToStage(event:Event):void {
        this._draggableQuad = new Quad(100, 100, 0xff8800);

        this._dragSource = new DragSource(DRAG_FORMAT);
        this._dragSource.width = 300;
        this._dragSource.height = 300;
        this._dragSource.x = 80;
        this._dragSource.y = 80;
        this.addChild(this._dragSource);

        this._dropTarget = new DropTarget(DRAG_FORMAT);
        this._dropTarget.width = 300;
        this._dropTarget.height = 300;
        this._dropTarget.x = 400;
        this._dropTarget.y = 80;
        this.addChild(this._dropTarget);

        this._resetButton = new Button();
        this._resetButton.label = "Reset";
        this._resetButton.addEventListener(Event.TRIGGERED, resetButton_triggeredHandler);
        this.addChild(this._resetButton);

        this._resetButton.validate();
        this._resetButton.x = (this.stage.stageWidth - this._resetButton.width) / 2;
        this._resetButton.y = this.stage.stageHeight - this._resetButton.height - 20;

        var instructions:Label = new Label();
        instructions.text = "Drag the square from the left container to the right container.";
        this.addChild(instructions);

        instructions.validate();
        instructions.x = (this.stage.stageWidth - instructions.width) / 2;
        instructions.y = (this._dragSource.y - instructions.height) / 2;

        this.reset();
    }

    private function resetButton_triggeredHandler(event:Event):void
    {
        this.reset();
    }

    public function initialize():void {
        this.visible = true;
    }
}
}
