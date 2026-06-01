export function SpeakersApplications() {
  return (
    <section id="speak">
      <div className="sec-label">Speaker Applications</div>
      <h2 className="sec-title">Apply to speak at ICEC Canada 2026</h2>
      <div className="sec-div"></div>
      <p className="sec-sub">
        Are you an academic, professor, digital expert, or industry leader?
        Apply below. Your presentation topic is assigned automatically the
        moment you submit your application.
      </p>

      <div className="speak-wrap">
        <div className="speak-header">
          <div className="speak-header-left">
            <h2>How it works</h2>
            <p>
              Apply in 4 steps — topic assigned instantly on submission. After
              approval, pay $1,500 for your Keynote Speaker Invitation Letter.
            </p>
          </div>
          <div className="speak-price-box">
            <div className="sp-label">Speaker Fee</div>
            <div className="sp-amt">$1,500</div>
            <div className="sp-sub">After approval</div>
          </div>
        </div>
        <div className="flow-steps">
          <div className="fstep">
            <div className="fstep-n">1</div>
            <div className="fstep-t">
              Fill in the form &amp; choose your area of interest
            </div>
          </div>
          <div className="fstep">
            <div className="fstep-n">2</div>
            <div className="fstep-t">
              Topic is assigned automatically by the system
            </div>
          </div>
          <div className="fstep">
            <div className="fstep-n">3</div>
            <div className="fstep-t">
              Application reviewed — approved speakers get a payment link
            </div>
          </div>
          <div className="fstep">
            <div className="fstep-n">4</div>
            <div className="fstep-t">
              Pay $1,500 — receive your Keynote Speaker Invitation Letter
            </div>
          </div>
        </div>
        <div className="speak-form-wrap">
          <h3>Speaker Application Form</h3>
          <div className="form-row">
            <div className="field">
              <label>
                Full name (as in passport)<span className="req">*</span>
              </label>
              <input
                type="text"
                id="sp-name"
                placeholder="e.g. Dr. Amara Johnson"
              />
            </div>
            <div className="field">
              <label>
                Email address<span className="req">*</span>
              </label>
              <input type="email" placeholder="your@email.com" />
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label>
                Professional title / role<span className="req">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Professor, Digital Strategist, CEO"
              />
            </div>
            <div className="field">
              <label>
                Organization / institution<span className="req">*</span>
              </label>
              <input type="text" placeholder="e.g. University of Lagos" />
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label>
                Country of residence<span className="req">*</span>
              </label>
              <select>
                <option value="">Select country...</option>
                <option>Nigeria</option>
                <option>Ghana</option>
                <option>Kenya</option>
                <option>South Africa</option>
                <option>UK</option>
                <option>Canada</option>
                <option>USA</option>
                <option>France</option>
                <option>Germany</option>
                <option>UAE</option>
                <option>Other</option>
              </select>
            </div>
            <div className="field">
              <label>
                Years of experience<span className="req">*</span>
              </label>
              <select>
                <option value="">Select...</option>
                <option>1–3 years</option>
                <option>3–5 years</option>
                <option>5–10 years</option>
                <option>10+ years</option>
              </select>
            </div>
          </div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: "500",
              color: "var(--muted)",
              marginBottom: "7px",
            }}
          >
            Choose your area of interest
            <span className="req" style={{ color: "#E24B4A" }}>
              *
            </span>{" "}
            — your presentation topic will be automatically assigned
          </div>
          <div className="topics-grid" id="topics-grid"></div>
          <div className="assigned-topic" id="assigned-topic">
            <div className="at-label">&#10003; Your assigned topic</div>
            <div className="at-topic" id="at-text"></div>
          </div>
          <div className="form-row">
            <div className="field">
              <label>LinkedIn profile URL</label>
              <input type="text" placeholder="linkedin.com/in/yourname" />
            </div>
            <div className="field">
              <label>Social media handle</label>
              <input type="text" placeholder="@yourhandle" />
            </div>
          </div>
          <div className="form-row form-full">
            <div className="field">
              <label>
                Short bio<span className="req">*</span>
              </label>
              <textarea placeholder="Tell us about yourself and your expertise in 2–3 sentences..."></textarea>
            </div>
          </div>
          <button className="pkg-btn purple-btn" style={{ maxWidth: "200px" }}>
            Submit application
          </button>
          <div className="submit-confirm" id="spk-confirm"></div>
        </div>
      </div>
    </section>
  );
}
