import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaXTwitter, FaFacebook, FaInstagram } from 'react-icons/fa6';

const contactInfo = [
    {
      icon: MapPin,
      label: "Visit Us",
      value: "Rua Oscar Freire, 1234\nSão Paulo, SP 01426-002",
    },
    {
      icon: Mail,
      label: "Email",
      value: "hello@hoodie.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+55(11) 99999-9999",
    },
];




function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="pt-32 pb-12">
        <div className="container-custom text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-primary mb-4">Entre em contato</p>
          <h1 className="font-family text-5xl md:text-7xl font-bold">
          FALE CONOSCO
          </h1>
          <p className="text-muted-foreground marker::text-primary mt-6 max-w-2xl mx-auto">
          Tem dúvidas sobre nossos lançamentos, tamanhos ou colaborações? Envie uma mensagem e nossa equipe responderá em até 24 horas.
          </p>
          <div className="red-divider" />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-custom grid lg:grid-cols-5 gap-10">
        
          <div className="lg:col-span-3 p-8 md:p-10 bg-surface-elevated ">
            {submitted ? (
              <div className="text-center py-16">
                <h3 className="font-display text-3xl uppercase tracking-wider mb-3">
                 Solicitação <span className="text-primary">Enviada</span>
                </h3>
                <p className="text-muted-foreground">Entraremos em contato com você em 24 horas.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
               
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Nome" name="name" required />
                  <Field label="Telefone" name="phone" type="tel" required />
                </div>
                <Field label="Email" name="email" type="email" required />
                <div>
                  
                  
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                   Mensagem
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Diga-nos como podemos ajudar..."
                    className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-primary outline-none transition-smooth resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground cursor-pointer px-8 py-4 text-sm uppercase tracking-widest font-semibold shadow-red hover:opacity-90 transition-smooth"
                >
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>

          <div className="lg:pl-8 flex flex-col justify-between">
            <div className="space-y-10">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center border border-border bg-secondary">
                    <item.icon size={20} className="text-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-editorial text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-sm font-body text-foreground whitespace-pre-line leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

              <div className="mt-12 pt-10 border-t border-border">
              <p className="text-xs text-editorial text-muted-foreground mb-4">Siga-nos</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center border border-border bg-secondary hover:bg-foreground hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram  size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center border border-border bg-secondary hover:bg-foreground hover:text-primary-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <FaXTwitter  size={20} />
                </a>

                 <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center border border-border bg-secondary hover:bg-foreground hover:text-primary-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <FaFacebook  size={20} />
                </a>
              </div>
            </div>

           
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-primary outline-none transition-smooth"
      />
    </div>
  );
}



export default ContactPage;