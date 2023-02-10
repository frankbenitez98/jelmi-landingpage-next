import React from "react";
import ContactForm from "../components/ContactForm";
import Container from "../components/Container";
import SectionHead from "../components/SectionHead";

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

const Contact = () => {
  return (
    <Container>
      <SectionHead
        title="Estamos para ayudarte 🤝"
        description={`Queremos conocerte y apoyarte, por eso te dejamos este espacio para que
				entremos en contacto`}
      />

      <div className="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
        <div>
          <h2 className="font-medium text-2xl text-gray-800">
            ¿Nos necesitas de inmediato?
          </h2>
          <p className="text-lg leading-relaxed text-slate-500 mt-3">
            Dejanos tus datos y te contactaremos lo más pronto posible
          </p>
          <div className="mt-5">
            {/* <!-- <div className="flex items-center mt-2 space-x-2 text-gray-600">
						<Icon className="text-gray-400 w-4 h-4" name="uil:map-marker" />
						<span>1734 Sanfransico, CA 93063</span>
					</div> --> */}
            <div className="flex items-center mt-2 space-x-2 text-gray-600">
              {/* <Icon className="text-gray-400 w-4 h-4" name="uil:envelope" /> */}
              <a href="mailto:hey@jelmi.com.co"> hey@jelmi.com.co</a>
            </div>
            <div className="flex items-center mt-2 space-x-2 text-gray-600">
              {/* <Icon className="text-gray-400 w-4 h-4" name="uil:phone" /> */}
              <a href="tel:+57 (304) 670 7099">+57 (304) 670 7099</a>
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
