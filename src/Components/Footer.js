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
            <a href="https://help.netflix.com/en/node/412">FAQ</a>
            <a href="https://media.netflix.com/en/">Media Centre</a>
            <a href="https://devices.netflix.com/en/">Ways to Watch</a>
            <a href="/">Cookie Preferences</a>
            <a href="https://fast.com/">Speed Test</a>
          </ul>
          <ul>
            <a href="https://help.netflix.com/en/">Help Centre</a>
            <a href="https://ir.netflix.net/ir-overview/profile/default.aspx">Investor Relations</a>
            <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a>
            <a href="https://help.netflix.com/legal/corpinfo">Corporate Information</a>
            <a href="https://help.netflix.com/legal/notices">Legal Notices</a>
          </ul>
          <ul>
            <a href="/">Account</a>
            <a href="https://jobs.netflix.com/">Jobs</a>
            <a href="https://help.netflix.com/legal/privacy">Privacy</a>
            <a href="https://help.netflix.com/en/contactus">Contact Us</a>
            <a href="https://www.netflix.com/in/browse/genre/839338">Only on Netflix</a>
          </ul>
        </div>

        {/* <!-- panel 3 --> */}
        <div className="foot-panel3">Netflix India</div>
      </div>
  )
}

export default Footer
