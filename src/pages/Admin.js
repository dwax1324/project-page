import "../css/Admin.css"
import Card from "../components/Card"

export default function Admin() {
    return (
        <>
            <div className="admin-container">
                <form>
                    <div className="admin-input-window">
                        <div>
                            title:
                            <input type="text">

                            </input>
                        </div>
                        <div>
                            img:
                            <input type="text">

                            </input>
                        </div>
                        <div>
                            description
                            <input type="text">

                            </input>
                        </div>

                        <div>
                            tag:
                            <input type="text">

                            </input>
                        </div>
                        <button className="admin-form-button" type="submit">
                            제출
                        </button>
                    </div>
                </form>

                <div className="admin-container2">
                    <Card />
                </div>
            </div>
        </>
    );
}

