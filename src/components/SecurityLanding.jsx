import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, MessageCircle, CheckCircle, Lock, Camera, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
const SecurityLanding = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleEmailSubmit = async e => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email requerido",
        description: "Por favor ingresa tu email para continuar.",
        variant: "destructive"
      });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Email inválido",
        description: "Por favor ingresa un email válido.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Simular envío
    setTimeout(() => {
      toast({
        title: "¡Gracias por tu interés!",
        description: "Nos pondremos en contacto contigo muy pronto para ofrecerte la mejor solución de seguridad."
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1500);
  };
  const handleWhatsAppClick = () => {
    const phoneNumber = ""; // Reemplazar con número real
    const message = "Hola, me interesa conocer más sobre sus servicios de seguridad electrónica.";
    const whatsappUrl = `https://wa.me/message/AICPIX5BPMWDP1`;
    window.open(whatsappUrl, '_blank');
  };
  return <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img className="w-full h-full object-cover" alt="Sistema de seguridad electrónica moderno" src="https://horizons-cdn.hostinger.com/265d09fe-aeeb-4b4b-ad4b-0f91902fedd4/intelihomeslogo-OpGjO.png" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/75 via-blue-900/70 to-indigo-900/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Floating Security Icons */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div className="absolute top-20 left-10 text-blue-400/30" animate={{
        y: [0, -20, 0],
        rotate: [0, 5, 0]
      }} transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}>
          <Shield size={60} />
        </motion.div>
        
        <motion.div className="absolute top-32 right-16 text-cyan-400/30" animate={{
        y: [0, 15, 0],
        rotate: [0, -5, 0]
      }} transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}>
          <Camera size={45} />
        </motion.div>

        <motion.div className="absolute bottom-32 left-20 text-indigo-400/30" animate={{
        y: [0, -10, 0],
        rotate: [0, 3, 0]
      }} transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }}>
          <Lock size={50} />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Logo/Brand Section */}
          <motion.div initial={{
          opacity: 0,
          y: -50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="mb-8">
            <img-replace alt="Logotipo de InteliHomes con un escudo estilizado" className="mx-auto w-40 md:w-56 mb-4" />
          </motion.div>

          {/* Main Headline */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Protege lo que más
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                te importa
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Soluciones integrales de seguridad. 
              <span className="block mt-2 text-cyan-200">
                Monitoreo 24/7 • Instalación profesional • Soporte técnico
              </span>
            </p>
          </motion.div>

          {/* Features Icons */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.5
        }} className="flex justify-center items-center space-x-8 mb-12">
            <div className="flex flex-col items-center text-blue-200">
              <Camera className="w-8 h-8 mb-2" />
              <span className="text-sm">Cámaras HD</span>
            </div>
            <div className="flex flex-col items-center text-cyan-200">
              <Shield className="w-8 h-8 mb-2" />
              <span className="text-sm">Alarmas</span>
            </div>
            <div className="flex flex-col items-center text-indigo-200">
              <Smartphone className="w-8 h-8 mb-2" />
              <span className="text-sm">App Móvil</span>
            </div>
          </motion.div>

          {/* Email Form */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.7
        }} className="mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md mx-auto border border-white/20 shadow-2xl">
              <div className="flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-cyan-400 mr-2" />
                <h3 className="text-xl font-semibold text-white">Cotización Gratuita</h3>
              </div>
              
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div className="relative">
                  <Input type="email" placeholder="tu@email.com" value={email} onChange={e => setEmail(e.target.value)} className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-cyan-400 focus:ring-cyan-400/50 h-12 text-lg rounded-xl" disabled={isSubmitting} />
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 h-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  {isSubmitting ? <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </div> : <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Solicitar Cotización
                    </div>}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* WhatsApp Button */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.9
        }}>
            <Button onClick={handleWhatsAppClick} className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg">
              <MessageCircle className="w-6 h-6 mr-3" />
              Contactar por WhatsApp
            </Button>
            
            <p className="text-white/60 text-sm mt-4">
              Atención inmediata • Asesoría personalizada
            </p>
          </motion.div>

        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
    </div>;
};
export default SecurityLanding;