
import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import ProductFeature from '../components/ProductFeature';
import TestimonialCarousel from '../components/TestimonialCarousel';
import FAQSection from '../components/FAQSection';

const Index = () => {
  const handleCTAClick = () => {
    // Aqui você pode adicionar a lógica de redirecionamento para checkout
    console.log('CTA clicked - redirect to checkout');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Countdown Timer Fixed Bar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <CountdownTimer initialMinutes={15} />
      </div>

      <div className="pt-16"> {/* Space for fixed countdown */}
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Esse pack pode colocar, no mínimo, 
              <span className="text-green-600"> 2.000 dólares</span> no seu bolso 
              <span className="text-blue-600"> em até 30 dias</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Tudo pronto. Nada de enrolação. Resultados rápidos com o poder da Inteligência Artificial.
            </p>

            {/* Video Section */}
            <div className="bg-gray-900 rounded-2xl p-8 mb-8 max-w-4xl mx-auto">
              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center text-white text-lg">
                📹 Incorporar vídeo do YouTube aqui
                <br />
                <span className="text-sm text-gray-400">(Link será adicionado)</span>
              </div>
            </div>

            <button 
              onClick={handleCTAClick}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-12 rounded-full text-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse"
            >
              QUERO COMEÇAR AGORA POR R$47
            </button>
          </div>
        </section>

        {/* What You'll Receive Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              🎁 O QUE VOCÊ VAI RECEBER
            </h2>
            
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
              <ProductFeature
                icon="🟢"
                title="537 Templates Editáveis no Canva"
                description="Carrosséis de alta conversão prontos para editar, com temas variados para atrair e vender em qualquer nicho."
                imagePlaceholder="🖼 Imagem do Canva"
                bgColor="bg-gradient-to-r from-green-600 to-green-700"
              />
              
              <ProductFeature
                icon="🟣"
                title="20 Vídeos Virais com Voz de IA"
                description="Vídeos prontos para viralizar. Textos, voz e impacto. Só baixar, postar e colher o engajamento."
                imagePlaceholder="📱 Vídeo Vertical"
                bgColor="bg-gradient-to-r from-purple-600 to-purple-700"
              />
              
              <ProductFeature
                icon="🟡"
                title="50 Prompts de Ouro para ChatGPT"
                description="Comandos prontos para criar produtos, conteúdos, funis e ideias lucrativas com IA. Só copiar e colar."
                imagePlaceholder="💬 Tela ChatGPT"
                bgColor="bg-gradient-to-r from-yellow-600 to-yellow-700"
              />
              
              <ProductFeature
                icon="🔵"
                title="Ebook Validado – Estratégias Reais para Vender nos Stories"
                description="O mesmo método que já gerou mais de 350 mil reais em vendas. Comandos, gatilhos e modelos prontos."
                imagePlaceholder="📚 Capa PDF"
                bgColor="bg-gradient-to-r from-blue-600 to-blue-700"
              />
            </div>

            {/* Manual Section */}
            <div className="mt-8">
              <ProductFeature
                icon="🟠"
                title="Manual de Uso Profissional"
                description="Aprenda a usar tudo certo e evite problemas. Inclui alerta legal: uso indevido de imagem pode gerar multa de até R$10.000 (conforme legislação)."
                imagePlaceholder="⚠️ Manual"
                bgColor="bg-gradient-to-r from-orange-600 to-red-600"
              />
            </div>
          </div>
        </section>

        {/* Opportunity Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-red-600 to-yellow-600 rounded-2xl p-12 text-center text-white shadow-2xl">
              <h2 className="text-4xl font-bold mb-6">
                💥 SE VOCÊ ESTÁ LENDO ISSO, ESSA É A SUA CHANCE!
              </h2>
              <p className="text-xl leading-relaxed">
                Esse é o pack mais completo, direto e validado do mercado. 
                Tudo testado. Tudo pronto pra você sair do zero e começar a faturar.
              </p>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              👥 O QUE NOSSOS CLIENTES DIZEM
            </h2>
            <TestimonialCarousel />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <FAQSection />
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              🔓 GARANTIA FINAL
            </h2>
            <p className="text-2xl mb-8">
              Acesso vitalício por apenas R$47
            </p>
            <p className="text-xl mb-8">
              Você não precisa de câmera, seguidores ou equipe. Só aplicar.
            </p>
            
            <button 
              onClick={handleCTAClick}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-6 px-12 rounded-full text-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              QUERO DESBLOQUEAR MEU ACESSO AGORA
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm text-gray-400 mb-4">
              ⚠️ Aviso legal: Os resultados podem variar de pessoa para pessoa. 
              Este produto não garante resultados específicos.
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-white">Termos de Uso</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
