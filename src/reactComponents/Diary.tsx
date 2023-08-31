import React from "react";

function DiaryDOM({title, projects, id} : any){
    return(<div className="book" data-diaryid={id}>
        <div className="pages">
        <div className="left-page">
                    <h3 className="larger">This week</h3>
                    <ul className="week">
                        <li><div className="monday-date large">Monday</div><div className="monday">
                            <ul className="normal">
                                <li>Project 1</li>
                                <li>Project 2</li>
                            </ul>
                        </div></li>
                        <li><div className="tuesday-date large">Tuesday</div><div className="tuesday"></div></li>
                        <li><div className="wednesday-date large">Wednesday</div><div className="wednesday"></div></li>
                        <li><div className="thursday-date large">Thursday</div><div className="thursday"></div></li>
                        <li><div className="friday-date large">Friday</div><div className="friday"></div></li>
                        <li className="weekend">
                            <div><div className="saturday-date large">Saturday</div><div className="saturday"></div></div>
                            <div><div className="sunday-date large">Sunday</div><div className="sunday"></div></div>
                        </li>
                    </ul>
                </div>
        </div>
        <div className="right-page"></div>
    </div>);
}

export default DiaryDOM;