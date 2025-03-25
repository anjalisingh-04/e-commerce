import HomeWrapper from "@/components/wrapper/Home";

const ContactPage = () => {
    return (
        <>
            <HomeWrapper>
                <div className="contact-container">
                    <h1>How can we help ?</h1>
                    <label>Need assistance with your order or interested in joining Team Tira? Submit a ticket here. Have you looked at our <span>FAQs</span>  ? We are constantly updating it, so your answer might be there already.</label>

                    <form>
                        <div className="num-email">

                            <div className="m-num">
                                <label>Mobile Number<span>*</span></label>
                                <br></br>
                                <input type='mobile number' className='num'>
                                </input>
                            </div>


                            <div className="m-num">
                                <label>Email<span>*</span></label>
                                <br></br>
                                <input type='email' className='num'>
                                </input>
                            </div>
                        </div>


                        <div className="sub">
                            <label>Subject<span>*</span></label>
                            <br></br>
                            <input type='subject' className='num'>
                            </input>
                        </div>

                        <div className="terms">
                            <p className="t-c">Terms & Condition</p>
                        </div>



                        <div className="share">
                            <label>Share details here<span>*</span></label>
                            <br></br>
                            <input type='share' className='num'>
                            </input>
                        </div>

                    </form>
                </div>
            </HomeWrapper>
        </>
    );
};

export default ContactPage;
