import React from 'react'

function Stats() {
    return (
        <section data-aos="fade-up" data-aos-duration="850" data-aos-once="true" id="stats">
        <iframe allowfullscreen="" title="video" frameborder="0" src="https://www.youtube.com/embed/tw4jkyfY4HE" className="video-box" width="560" height="315"></iframe>
        <div id="stats-table">
            <table className="table">
                <thead style={{color: "rgb(255,255,255)"}}>
                    <tr>
                        <th colspan="2">Base Specs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="cell-left" style={{ color: "var(azure)" }}>Acceleration 0-60&nbsp;mph</td>
                        <td className="cell-right">1.9 sec</td>
                    </tr>
                    <tr>
                        <td className="cell-left" style={{ color: "var(azure)" }}>Acceleration 0-100&nbsp;mph</td>
                        <td className="cell-right">4.2 sec</td>
                    </tr>
                    <tr>
                        <td className="cell-left" style={{ color: "var(azure)" }}>Acceleration 1/4&nbsp;mile</td>
                        <td className="cell-right">8.8&nbsp;sec</td>
                    </tr>
                    <tr>
                        <td className="cell-left" style={{ color: "var(azure)" }}>Top Speed</td>
                        <td className="cell-right">Over&nbsp;250&nbsp;mph</td>
                    </tr>
                    <tr>
                        <td className="cell-left" style={{ color: "var(azure)" }}>Wheel Torque</td>
                        <td className="cell-right">10,000&nbsp;Nm</td>
                    </tr>
                    <tr>
                        <td className="cell-left" style={{ color: "var(azure)" }}>Mile Range</td>
                        <td className="cell-right">620&nbsp;miles</td>
                    </tr>
                    <tr>
                        <td className="cell-left" style={{ color: "var(azure)" }}>Seating</td>
                        <td className="cell-right">4</td>
                    </tr>
                    <tr>
                        <td className="cell-left" style={{ color: "var(azure)" }}>Drive</td>
                        <td className="cell-right">All-Wheel Drive</td>
                    </tr>
                    <tr>
                        <td className="cell-left" style={{ color: "var(azure)" }}>Base Price</td>
                        <td className="cell-right">$200,000</td>
                    </tr>
                    <tr>
                        <td className="cell-left" style={{ color: "var(azure)" }}>Base Reservation</td>
                        <td className="cell-right">$50,000</td>
                    </tr>
                    <tr>
                            <td className="cell-left" style={{ color: "var(azure)" }}>Founders Series Price</td>
                        <td className="cell-right">$250,000</td>
                    </tr>
                    <tr style={{borderBottomStyle: "none"}}>
                        <td className="cell-left" style={{color: "var(azure)",borderBottomStyle: "none"}}>Founders Series Reservation(1,000 reservations available)</td>
                        <td className="cell-right" style={{borderBottomStyle: "none"}}>$250,000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
    )
}

export default Stats
