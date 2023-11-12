import "./SideMenu.scss"


function SideMenu() {
    return (<div className="background">
        <div className="MenuHeader">

        </div>
        <div className="MenuBody">
            <button type="button" class="btn btn-primary">Home</button>
            <button type="button" class="btn btn-primary">My Projects</button>
            <button type="button" class="btn btn-primary">Stories</button>
        </div>
        <div className="MenuFooter">
            <img src="tpfinal\src\assets\img" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error ducimus harum debitis, magni, quaerat adipisci atque explicabo, tempora soluta cupiditate libero omnis odio. Nobis facere hic optio, nesciunt in ratione.</p>
        </div>
    </div>)
}

export default SideMenu