function Footer() {
    return (
        <div style={{
            background: "#222",
            color: "#fff",
            padding: "30px",
            marginTop: "40px"
        }}>

            <h2>MyStore 🛍️</h2>

            <p>Best deals on all categories</p>

            <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px"
            }}>

                <div>
                    <h4>Company</h4>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Blog</p>
                </div>

                <div>
                    <h4>Help</h4>
                    <p>Contact</p>
                    <p>Support</p>
                    <p>FAQs</p>
                </div>

                <div>
                    <h4>Follow</h4>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                </div>

            </div>

            <p style={{ marginTop: "20px" }}>
                © 2026 MyStore. All rights reserved.
            </p>

        </div>
    );
}

export default Footer;
