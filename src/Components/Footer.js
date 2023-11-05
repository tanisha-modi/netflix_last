import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
        {/* <!-- panel1 --> */}
        <div className="foot-panel1">Questions? Call <span>000-800-919-1694</span></div>

        {/* <!-- panel2 --> */}
        <div className="foot-panel2">
          <ul>
            <a href="https://help.netflix.com/en/node/412" target="_blank" rel="noreferrer">FAQ</a>
            <a href="https://media.netflix.com/en/" target="_blank" rel="noreferrer">Media Centre</a>
            <a href="https://devices.netflix.com/en/" target="_blank" rel="noreferrer">Ways to Watch</a>
            <a href="/">Cookie Preferences</a>
            <a href="https://fast.com/" target="_blank" rel="noreferrer">Speed Test</a>
          </ul>
          <ul>
            <a href="https://help.netflix.com/en/" target="_blank" rel="noreferrer">Help Centre</a>
            <a href="https://ir.netflix.net/ir-overview/profile/default.aspx" target="_blank" rel="noreferrer">Investor Relations</a>
            <a href="https://help.netflix.com/legal/termsofuse" target="_blank" rel="noreferrer">Terms of Use</a>
            <a href="https://help.netflix.com/legal/corpinfo" target="_blank" rel="noreferrer">Corporate Information</a>
            <a href="https://help.netflix.com/legal/notices" target="_blank" rel="noreferrer">Legal Notices</a>
          </ul>
          <ul>
            <a href="/">Account</a>
            <a href="https://jobs.netflix.com/" target="_blank" rel="noreferrer">Jobs</a>
            <a href="https://help.netflix.com/legal/privacy" target="_blank" rel="noreferrer">Privacy</a>
            <a href="https://help.netflix.com/en/contactus" target="_blank" rel="noreferrer">Contact Us</a>
            <a href="https://www.netflix.com/in/browse/genre/839338" target="_blank" rel="noreferrer">Only on Netflix</a>
          </ul>
        </div>

        {/* <!-- panel 3 --> */}
        <div className="foot-panel3">Netflix India</div>
      </div>
  )
}

export default Footer
