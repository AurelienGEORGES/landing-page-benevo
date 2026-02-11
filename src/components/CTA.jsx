import React, { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-primary-green">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Prêt à simplifier votre prochain événement ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Rejoignez les associations qui passent à la vitesse supérieure.
          </p>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
            <div className="flex gap-3 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Votre email responsable asso"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-full text-text-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary-green"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-primary-green font-semibold rounded-full hover:bg-secondary-green transition"
              >
                Me tenir informé(e)
              </button>
            </div>
          </form>

          {submitted && (
            <p className="text-white font-semibold">
              ✓ Merci ! Votre intérêt est enregistré.
            </p>
          )}

          <p className="text-white/80 text-sm">Pas de spam. Juste de l&apos;entraide.</p>
        </div>
      </div>
    </section>
  );
}
