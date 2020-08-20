import React from "react";
import { Input, Button } from "reactstrap";
export default function List(props) {
    return (
        <div className="input">

            <Input
                width="80%"
                placeholder=""
                onChange={event => props.onAddList(event.target.value)}
            />
            <Button>
                onClick={() => props.onAddList()} AddTask </Button>{" "}
            <Button> EditTask</Button>

            <Button

                onClick={() => props.onDeleteList()}
            >
                DeleteTask
                    </Button>{" "}





        </div >
    );
} 