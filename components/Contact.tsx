"use client";

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { Send, Calendar, Clock, Info } from 'lucide-react';

type FormData = {
  nombres: string;
  correo: string;
  empresa: string;
  title: string;
  mensaje: string;
  fechaReunion: string;
  horaReunion: string;
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>();

  // Obtener fecha mínima (día actual)
  const today = new Date();
  const minDate = today.toISOString().split('T')[0];
  
  // Obtener fecha máxima (30 días después)
  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 30);
  const maxDateString = maxDate.toISOString().split('T')[0];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          title: data.title,
          nombres: data.nombres,
          correo: data.correo,
          empresa: data.empresa,
          mensaje: data.mensaje,
          fechaReunion: data.fechaReunion,
          horaReunion: data.horaReunion
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-primary-light">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-white"
        >
          Contáctanos
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center text-neutral-light max-w-2xl mx-auto mb-12"
        >
          Agenda una consulta gratuita y descubre cómo podemos ayudarte a transformar tu negocio
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-white p-8 rounded-xl shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nombres" className="block text-sm font-medium text-primary mb-1">
                Nombre completo <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                id="nombres"
                placeholder="Tu nombre y apellido"
                {...register('nombres', { required: 'El nombre es requerido' })}
                className="w-full px-4 py-2 border border-neutral-light rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
              {errors.nombres && (
                <p className="mt-1 text-sm text-accent">{errors.nombres.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="correo" className="block text-sm font-medium text-primary mb-1">
                Correo Electrónico <span className="text-accent">*</span>
              </label>
              <input
                type="email"
                id="correo"
                placeholder="ejemplo@empresa.com"
                {...register('correo', { 
                  required: 'El correo es requerido',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Correo electrónico inválido'
                  }
                })}
                className="w-full px-4 py-2 border border-neutral-light rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
              {errors.correo && (
                <p className="mt-1 text-sm text-accent">{errors.correo.message}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="empresa" className="block text-sm font-medium text-primary mb-1">
                Empresa
              </label>
              <input
                type="text"
                id="empresa"
                placeholder="Nombre de tu empresa"
                {...register('empresa')}
                className="w-full px-4 py-2 border border-neutral-light rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="title" className="block text-sm font-medium text-primary mb-1">
                Asunto <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                id="title"
                placeholder="¿En qué podemos ayudarte?"
                {...register('title', { required: 'El asunto es requerido' })}
                className="w-full px-4 py-2 border border-neutral-light rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-accent">{errors.title.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-primary mb-1">
              Mensaje <span className="text-accent">*</span>
            </label>
            <textarea
              id="mensaje"
              rows={4}
              placeholder="Cuéntanos sobre tu proyecto o consulta"
              {...register('mensaje', { required: 'El mensaje es requerido' })}
              className="w-full px-4 py-2 border border-neutral-light rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
            />
            {errors.mensaje && (
              <p className="mt-1 text-sm text-accent">{errors.mensaje.message}</p>
            )}
          </div>
          
          <div className="bg-primary-light/5 p-4 rounded-lg">
            <div className="flex items-center mb-4">
              <Calendar className="w-5 h-5 text-secondary mr-2" />
              <h3 className="text-lg font-medium text-primary">Agenda una cita</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fechaReunion" className="block text-sm font-medium text-primary mb-1">
                  Fecha preferida
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="fechaReunion"
                    min={minDate}
                    max={maxDateString}
                    {...register('fechaReunion')}
                    className="w-full px-4 py-2 border border-neutral-light rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="horaReunion" className="block text-sm font-medium text-primary mb-1">
                  Hora preferida
                </label>
                <div className="relative">
                  <select
                    id="horaReunion"
                    {...register('horaReunion')}
                    className="w-full px-4 py-2 border border-neutral-light rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent appearance-none"
                  >
                    <option value="">Seleccionar hora</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:00">05:00 PM</option>
                  </select>
                  <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral pointer-events-none" />
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex items-start gap-2 text-sm text-neutral">
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <p>Al seleccionar fecha y hora, intentaremos ajustarnos a tu preferencia. Te confirmaremos por correo electrónico.</p>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-dark transition-colors disabled:opacity-50"
          >
            {isSubmitting ? (
              'Enviando...'
            ) : (
              <>
                Enviar Solicitud
                <Send className="w-5 h-5" />
              </>
            )}
          </button>

          {submitStatus === 'success' && (
            <div className="p-4 bg-green-100 text-green-800 rounded-lg">
              <p className="text-center font-medium">
                ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-100 text-red-800 rounded-lg">
              <p className="text-center font-medium">
                Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
              </p>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
} 