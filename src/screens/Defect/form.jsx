import React from 'react'

const Form = () => {
    return (
        <div>
            <form class="ui form">
            <h4 class="ui dividing header">Add Defect</h4>
            <div class="field">  
                <div class="two fields">
                    <div class="field">
                    <label>Defect Id:</label>
                        <input type="text" name="shipping[Defect-Id]" placeholder="Defect Id"/>
                    </div>
                    <div class="field">
                    <label>Module:</label>
                        <input type="text" name="shipping[module]" placeholder="Module"/>
                    </div>
                </div>
            </div>
            <div class="three fields">
                <div class="field">
                    <label>Type:</label>
                    <select class="ui fluid dropdown">
                        <option value="">Select</option>
                        <option value="AL">UI</option>
                        <option value="Functionality">Functionality</option>
                        <option value="Enhancement">Enhancement</option>
                    </select>
                </div>
                <div class="field">
                    <label>Severity:</label>
                    <select class="ui fluid dropdown">
                        <option value="">Select</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="Heigh">Heigh</option>
                    </select>
                </div>
                <div class="field">
                    <label>Priority:</label>
                    <select class="ui fluid dropdown">
                        <option value="">Select</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="Heigh">Heigh</option>
                    </select>
                </div>
            </div>
            <div class="field">
                <label>Description</label>
                <textarea rows="1" placeholder="Description"></textarea>
            </div>
            <div class="field">
                <label>Steps to recreate</label>
                <textarea rows="1" placeholder="Steps-to-recreate"></textarea>
            </div>

            <div class="field">
                <label>Assign To:</label>
                <select class="ui fluid dropdown">
                        <option value="">Select</option>
                        <option value="User-1">User 1</option>
                        <option value="User-2">User 2</option>
                        <option value="User-3">User 3</option>
                    </select>
            </div>
        </form>
        </div>
    )
}

export default Form
