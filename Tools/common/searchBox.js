function searchBox(){

    return`
    <div class="subNavbar flex_space">
    <ul id="subMenuList">
        <li><a href="https://www.naukri.com/mnjuser/homepage">All Jobs</a></li>
        <li><a href="#recruiters">IIT/IIM Jobs</a></li>
        <li><a href="https://www.naukri.com/psu-government-jobs">Govt. Jobs</a></li>
        <li><a href="https://www.naukri.com/international-jobs">International Jobs</a></li>
        <li><a href="https://www.naukri.com/walkin-jobs">Walk-in Jobs</a></li>
    </ul>
</div>

<!-- slide -->

<div class="slide">
    <div id="insideSlide">
        <div id="mainDiv">
            <div class="forForm mp">
                <form action="">
                    <input type="text" placeholder="Skills, Designation, Companies" id="skill">
                    <input type="text" placeholder="Location/Localities" id="place">
                    <input type="submit" value="Search" id="btn">
                </form>
                <p>Advanced Search</p>
            </div>

            <div class="forForm mt">
                <p>Browse Jobs</p>
                <div id="subMenu">
                    <ul>
                        <li><a href="file:///C:/Users/$hubham%20Kr.%20Jaiswal/Desktop/Naukari/job.html"
                                target="_blank">All Jobs</a></li>
                        <li><a href="https://www.naukri.com/top-company-jobs" target="_blank">Jobs by Company</a>
                        </li>
                        <li><a href="https://www.naukri.com/jobs-by-category" target="_blank">Jobs by Category</a>
                        </li>
                        <li><a href="https://www.naukri.com/jobs-by-location" target="_blank">Jobs by Location</a>
                        </li>
                        <li><a href="https://www.naukri.com/top-jobs-by-designations" target="_blank">Jobs by
                                Designation</a></li>
                        <li><a href="https://www.naukri.com/top-skill-jobs" target="_blank">Jobs by Skill</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div id="box">
            <div id="insideBox">
                <div>
                    <p>Profile Completeness</p>
                    <p>Last updated on 15-06-2022</p>
                </div>
                <div>
                    <img src="/images/percentage.png" alt="">
                </div>
            </div>

            <div id="updatePart">
                <ul class="a">
                    <li><a href="https://www.naukri.com/mnjuser/profile?src=hp" target="_blank">Upload Resume</a>
                    </li>
                    <li><a href="https://www.naukri.com/mnjuser/profile?src=hp" target="_blank">Update FArea</a>
                    </li>
                    <li><a href="https://www.naukri.com/mnjuser/profile?src=hp" target="_blank">Update IT Skills</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>`
}

export default searchBox;