import React from 'react'
import "./TechStats.css"
const TechStats = () => {
  return (
    <section id='TechStats'>
        <h5>Stats of GitHub And LeetCode</h5>
        <h2>My Coding And Development Statistics</h2>
        <div className="container TechStats__container">

            <div className="leetcode__container">
                <h3>LeetCode</h3>
                <div>
                    <img src="https://leetcard.jacoblin.cool/debanjandgt?ext=heatmap&show_rank==false&hide==username,background,icon&border=0&radius=20&cache=0" alt="Debanjan'LeetCode stats" />
                </div>
            </div>

            <div className="github__container">
                <h3>GitHub</h3>
                <div>
                    <img src="https://github-readme-stats.vercel.app/api?username=debanjandgt&show_icons=true&count_private=true&theme=darcula&hide_border=true&hide=issues&bg_color=00000000" alt="Debanjan'GitHub stats" />
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=debanjandgt&layout=compact&hide_border=true&theme=darcula&bg_color=00000000&langs_count=8&hide!=jupyter%20notebook,tex,css,php" alt="Debanjan'GitHub stats" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default TechStats