import  emailjs  from "emailjs-com";

const Mailer = () => {

    function sendEmail (e){
        e.preventDefault();
        emailjs.sendForm('service_ptn65ub','template_ib8rs48',e.target).then(res=>{ console.log(res);}).catch(err=> console.log(err));
    }

  return (
    <div className="container border">
        <h1>Contact me!</h1>
        <form className="text-white flex flex-col" onSubmit={sendEmail}>
            <label className="">Name</label>
            <input type="text" name="name" className="form-control"/>

            <label>Email</label>
            <input type="email" name="user_email" className="form-control"/>

            <label>Messaje</label>
            <textarea name="message" rows="4" className="form-control"/>
            <input type="submit" value="Send" className="form-control btn btn-primary"/>
        </form>
    </div>
  );
};
export default Mailer