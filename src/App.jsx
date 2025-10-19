import { useState } from 'react';

export default function Visual() {
  const [showHidden, setShowHidden] = useState(false);
  const [showEssentials, setShowEssentials] = useState(false);

  return (
    <div className="min-h-screen p-4 flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#000000' }}>
      <style>{`
        @keyframes levitate {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes brainFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          25% { 
            transform: translateY(-8px) rotate(2deg); 
          }
          50% { 
            transform: translateY(-4px) rotate(0deg); 
          }
          75% { 
            transform: translateY(-10px) rotate(-2deg); 
          }
        }
        @keyframes pop {
          0% { transform: scale(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: scale(1); opacity: 0.6; }
        }
        .levitate { animation: levitate 6s ease-in-out infinite; }
        .brain-float { 
          animation: brainFloat 4s ease-in-out infinite; 
          display: inline-block;
        }
        .star-pop { animation: pop 2.5s infinite; }
      `}</style>

      {[...Array(30)].map((_, i) => (
        <div key={`star-${i}`} className="absolute w-1.5 h-1.5 rounded-full"
             style={{
               backgroundColor: '#D4AF37',
               left: `${Math.random() * 100}%`,
               top: `${Math.random() * 100}%`
             }} />
      ))}

      {[...Array(26)].map((_, i) => (
        <div key={`pop-${i}`} className="absolute star-pop"
             style={{
               left: `${Math.random() * 100}%`,
               top: `${Math.random() * 100}%`,
               fontSize: '1.5rem',
               animationDelay: `${Math.random() * 3}s`
             }}>
          ✨
        </div>
      ))}

      

      <div className="w-full max-w-lg relative z-10">
        <div className="rounded-2xl p-6 relative"
             style={{
               backgroundColor: '#000000',
               borderColor: '#D4AF37',
               border: '2px solid #D4AF37'
             }}>

          <div className="relative">
            {/* CERVEAU */}
            <div className="flex justify-center mb-4">
              <div className="brain-float text-6xl cursor-pointer transition-all duration-300 hover:scale-110"
                   onMouseEnter={(e) => {
                     e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.4))';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.filter = 'drop-shadow(0 0 4px rgba(212, 175, 55, 0.2))';
                   }}
                   style={{
                     filter: 'drop-shadow(0 0 4px rgba(212, 175, 55, 0.2))'
                   }}>
                🧠
              </div>
            </div>

            {/* TITRE */}
            <h1 className="text-2xl font-bold text-center mb-6"
                style={{ color: '#FFFFFF', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.05em' }}>
              Le vrai mérite n'a jamais disparu
            </h1>

            {/* CITATION */}
            <div className="border-l-4 p-4 mb-6 rounded"
                 style={{
                   backgroundColor: '#0D0D0D',
                   borderColor: '#8B7620',
                   boxShadow: 'none'
                 }}>
              <p className="text-sm italic" style={{ color: '#D4AF37', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                "T'as juste dit à ChatGPT de faire l'app, non ? Merci Cursor."
              </p>
            </div>

            {/* INTRODUCTION */}
            <div className="mb-6">
              <p className="text-sm mb-2 leading-relaxed" style={{ color: '#FFFFFF', fontFamily: 'Satoshi, sans-serif' }}>
                C'est le genre de phrase qu'on balance avec un sourire en coin. Comme si utiliser l'IA effaçait toute compétence.
              </p>
              <p className="text-sm font-semibold" style={{ color: '#D4AF37', fontFamily: 'Space Grotesk, sans-serif' }}>
                👉 La vérité, c'est l'inverse.
              </p>
            </div>

            {/* SECTION CE QU'ON NE VOIT PAS */}
            <div className="border p-4 mb-6 rounded"
                 style={{
                   backgroundColor: '#0D0D0D',
                   borderColor: '#8B7620'
                 }}>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-bold" style={{ color: '#D4AF37', fontFamily: 'Space Grotesk, sans-serif' }}>
                  Ce qu'on ne voit pas :
                </h2>
                <button
                  onClick={() => setShowHidden(!showHidden)}
                  className="text-2xl cursor-pointer transition-transform hover:scale-110"
                  style={{ color: '#D4AF37' }}>
                  {showHidden ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>

              {showHidden && (
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "🔧 Choisir les technos",
                    "🐛 Résoudre les erreurs",
                    "🌐 Gérer port, API, responsive",
                    "✨ Itérer pour l'UX fluide",
                    "🔨 Corriger ce que l'IA génère",
                    "💡 Comprendre le pourquoi",
                    "🎯 Poser les bonnes questions",
                    "🏁 Aller jusqu'au bout"
                  ].map((item, i) => (
                    <div key={i}
                         className="border-l-4 p-2 rounded hover:translate-x-1 transition-transform duration-300 cursor-pointer text-sm"
                         style={{
                           backgroundColor: '#0D0D0D',
                           borderColor: '#D4AF37',
                           color: '#FFFFFF',
                           fontFamily: 'Satoshi, sans-serif'
                         }}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.backgroundColor = '#1A1A1A';
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.backgroundColor = '#0D0D0D';
                         }}>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* SECTION CE QUI COMPTE */}
            <div className="border p-4 mb-8 rounded"
                 style={{
                   backgroundColor: '#0D0D0D',
                   borderColor: '#8B7620'
                 }}>

              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold" style={{ color: '#D4AF37', fontFamily: 'Manrope, sans-serif' }}>
                  Ce qui compte :
                </h2>
                <button
                  onClick={() => setShowEssentials(!showEssentials)}
                  className="text-2xl cursor-pointer transition-transform hover:scale-110"
                  style={{ color: '#D4AF37' }}>
                  {showEssentials ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>

              {showEssentials && (
                <div className="space-y-2 text-sm mb-2">
                  {[
                    { title: "Vision", desc: "Savoir ce qu'on veut construire" },
                    { title: "Logique", desc: "Avoir du recul technique" },
                    { title: "Adaptabilité", desc: "Corriger les failles" },
                    { title: "Persévérance", desc: "Chercher des solutions" },
                    { title: "Compréhension", desc: "Maîtriser ce qu'on construit" }
                  ].map((item, i) => (
                    <div key={i}
                         className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300 p-2 rounded cursor-pointer"
                         style={{ color: '#FFFFFF', fontFamily: 'Satoshi, sans-serif' }}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.08)';
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.backgroundColor = 'transparent';
                         }}>
                      <span style={{ color: '#D4AF37' }}>✔️</span>
                      <div>
                        <span className="font-bold" style={{ color: '#D4AF37', fontFamily: 'Manrope, sans-serif' }}>{item.title} :</span>
                        <span> {item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* SECTION FINALE */}
            <div className="border p-4 rounded text-center"
                 style={{
                   backgroundColor: '#0D0D0D',
                   borderColor: '#8B7620',
                   boxShadow: 'none'
                 }}>
              <p className="text-sm mb-2" style={{ color: '#FFFFFF' }}>
                Avec l'IA, <span className="font-bold" style={{ color: '#D4AF37' }}>pas contre elle.</span>
              </p>
              <p className="text-xs mb-2" style={{ color: '#FFFFFF' }}>
                Ignorer l'IA, c'est comme refuser AutoCAD en archi :
              </p>
              <p className="text-sm font-bold px-3 py-2 rounded inline-block"
                 style={{ color: '#000000', backgroundColor: '#D4AF37', fontFamily: 'Space Grotesk, sans-serif' }}>
                Juste en retard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}