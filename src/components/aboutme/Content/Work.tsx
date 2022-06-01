import classes from "./Content.module.css";
import workIcon from "../image/work.png";
import DetailButton from "./DetailButton";
import {ContentProps} from "./Content";

const Work = (props: ContentProps) => {

    const loidlIntroduction = <span className={classes.textTime}>Atelier Loidl Landscape Architects made a name for itself with several famous projects, <br/>including Gleisdreieck in Berlin and Baakenpark in Hamburg. <br/>I work as a project team member and a junior project manager. </span>
    const a24Introduction = <span className={classes.textTime}>A24 Landscape has been designing different scales projects, <br/>range from urban development concepts to parks, squares and gardens.<br/> I worked as a project team member.</span>

    return (
        <li>
            <div>
                <div className={classes.theme}>
                    <img className={classes.icon} src={workIcon} alt="icon"/>
                    <div className={classes.content}>
                        <span className={classes.contentText}>Work</span>
                        <br/>
                        <span className={classes.contentTime}>2016-2022</span>
                    </div>
                </div>
                <div className={classes.text}>
                    <span className={classes.textTime}>2020-2022: </span>
                    <span className={classes.textAchive}>Atelier-Loidl Landschaftsarchitektur</span>
                    <br/>
                    {loidlIntroduction}
                    <div style={{marginTop: '0.5rem'}}>
                        <span className={classes.textTime}> 2016-2019: </span>
                        <span className={classes.textAchive}>A24 Landschaftsarchitektur</span>
                        <br/>
                        {a24Introduction}
                    </div>
                </div>
            </div>
            <div className={classes.action} >
                    <DetailButton type='button' onClick={props.onShowModal} id='WorkDetails'/>
            </div>
        </li>
    )
}

export default Work;