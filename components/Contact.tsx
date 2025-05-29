"use client";

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { FORM_CONFIG, EMAIL_CONFIG, ANIMATIONS } from '@/lib/constants';
import { Icons } from '@/lib/icons';
import { dateUtils, validationRules } from '@/lib/utils';

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

  // Obtener fechas usando utilidades
  const minDate = dateUtils.getToday();
  const maxDate = dateUtils.getFutureDate(FORM_CONFIG.contact.meeting.maxDaysAhead);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.templateId,
        {
          title: data.title,
          nombres: data.nombres,
          correo: data.correo,
          empresa: data.empresa,
          mensaje: data.mensaje,
          fechaReunion: data.fechaReunion,
          horaReunion: data.horaReunion
        },
        EMAIL_CONFIG.publicKey
      );

      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const { contact: formConfig } = FORM_CONFIG;

  return (
    <section id="contacto" className="py-20 bg-primary-light">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          {...ANIMATIONS.fadeIn}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-white"
        >
          {formConfig.title}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center text-neutral-light max-w-2xl mx-auto mb-12"
        >
          {formConfig.subtitle}
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
                {formConfig.fields.nombres.label} {formConfig.fields.nombres.required && <span className="text-accent">*</span>}
              </label>
              <input
                type="text"
                id="nombres"
                placeholder={formConfig.fields.nombres.placeholder}
                {...register('nombres', { 
                  required: formConfig.fields.nombres.required ? validationRules.required('El nombre') : false 
                })}
                className="w-full px-4 py-2 border border-neutral-light rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
              {errors.nombres && (
                <p className="mt-1 text-sm text-accent">{errors.nombres.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="correo" className="block text-sm font-medium text-primary mb-1">
                {formConfig.fields.correo.label} {formConfig.fields.correo.required && <span className="text-accent">*</span>}
              </label>
              <input
                type="email"
                id="correo"
                placeholder={formConfig.fields.correo.placeholder}
                {...register('correo', { 
                  required: formConfig.fields.correo.required ? validationRules.required('El correo') : false,
                  pattern: {
                    value: validationRules.email.pattern,
                    message: validationRules.email.message
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
                {formConfig.fields.empresa.label}
              </label>
              <input
                type="text"
                id="empresa"
                placeholder={formConfig.fields.empresa.placeholder}
                {...register('empresa')}
                className="w-full px-4 py-2 border border-neutral-light rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="title" className="block text-sm font-medium text-primary mb-1">
                {formConfig.fields.title.label} {formConfig.fields.title.required && <span className="text-accent">*</span>}
              </label>
              <input
                type="text"
                id="title"
                placeholder={formConfig.fields.title.placeholder}
                {...register('title', { 
                  required: formConfig.fields.title.required ? validationRules.required('El asunto') : false 
                })}
                className="w-full px-4 py-2 border border-neutral-light rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-accent">{errors.title.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-primary mb-1">
              {formConfig.fields.mensaje.label} {formConfig.fields.mensaje.required && <span className="text-accent">*</span>}
            </label>
            <textarea
              id="mensaje"
              rows={4}
              placeholder={formConfig.fields.mensaje.placeholder}
              {...register('mensaje', { 
                required: formConfig.fields.mensaje.required ? validationRules.required('El mensaje') : false 
              })}
              className="w-full px-4 py-2 border border-neutral-light rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
            />
            {errors.mensaje && (
              <p className="mt-1 text-sm text-accent">{errors.mensaje.message}</p>
            )}
          </div>
          
          <div className="bg-primary-light/5 p-4 rounded-lg">
            <div className="flex items-center mb-4">
              <Icons.Calendar className="w-5 h-5 text-secondary mr-2" />
              <h3 className="text-lg font-medium text-primary">{formConfig.meeting.title}</h3>
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
                    max={maxDate}
                    {...register('fechaReunion')}
                    className="w-full px-4 py-2 border border-neutral-light rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="horaReunion" className="block text-sm font-medium text-primary mb-1">
                  Hora preferida
                </label>
                <div>
                  <input
                    type="time"
                    id="horaReunion"
                    min="09:00"
                    max="18:00"
                    {...register('horaReunion')}
                    className="w-full px-4 py-2 border border-neutral-light rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border-l-4 border-secondary">
              <div className="flex items-start">
                <Icons.Info className="w-5 h-5 text-secondary mt-0.5 mr-2 flex-shrink-0" />
                <div className="text-sm text-primary">
                  <p className="font-medium">Información importante:</p>
                  <ul className="mt-1 space-y-1 text-xs">
                    <li>• Las citas están disponibles de lunes a viernes, de 9:00 AM a 18:00 PM</li>
                    <li>• Recibirás una confirmación por correo electrónico</li>
                    <li>• La consulta inicial es completamente gratuita</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Status messages */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center">
                <Icons.CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <p className="text-green-700 text-sm">{formConfig.messages.success}</p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center">
                <Icons.AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                <p className="text-red-700 text-sm">{formConfig.messages.error}</p>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-secondary text-white py-3 px-6 rounded-lg hover:bg-secondary/90 transition-colors disabled:bg-neutral-light disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                {formConfig.messages.submitting}
              </>
            ) : (
              <>
                <Icons.Send className="w-4 h-4" />
                Enviar Mensaje
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
} 