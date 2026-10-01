# 🎯 Implementación de Manejo de Errores en eCommerce

## ¿QUÉ ES ESTE PROYECTO?

Un reto práctico para que **TÚ** implementes una estrategia robusta de manejo de errores en React mientras consumes una API Express ya completamente funcional.

### La Premisa

- **Backend:** ✅ Completado, funcional, listening en puerto 3000
- **Frontend:** 🔨 Estructura lista, lógica vacía (TIENES QUE LLENARLA)
- **Tu tarea:** Implementar el manejo de errores HTTP en componentes React

**No** es un proyecto donde copies código terminado. Es un proyecto donde aprendes/practicas haciendo.

## Información General

| Campo | Valor |
|-------|-------|
| **Tema** | Estrategia de errores HTTP en Frontend (React) |
| **Nivel** | advanced-l2 |
| **Tipo** | Práctico - Aprendizaje por hacer |
| **Tiempo estimado** | 4-8 horas (implémentalo a tu ritmo) |
| **Requisitos** | Node.js 16+, npm, React 18.2+, concepto de componentes |
| **Objetivo** | Cerrar brecha en manejo de errores | HTTP en React

## Fases del Reto - TU CAMINO

### Fase 0: Inicio Rápido (30 segundos)

**Objetivo:** Verificar que todo funciona y entender la estructura

**Pasos:**

```bash
# Terminal 1 - Backend
cd backend
npm run dev
# → Escucha en http://localhost:3000

# Terminal 2 - Frontend
cd frontend
npm run dev
# → Corre en http://localhost:5173
```

**Verificación:** 
- Backend inicia sin errores
- Frontend abre en http://localhost:5173 
- Ves un mensaje diciendo "Tu reto..."

---

### Fase 1: Entender QUÉ Necesitas Hacer (30 minutos)

**EMPIEZA AQUÍ:** Lee el archivo `GUIA_IMPLEMENTACION.md`

Este archivo explica:
- ✅ Qué componentes necesitan código
- ✅ Qué errores necesitas manejar
- ✅ Qué datos espera cada componente
- ✅ Checklist de tareas
- ✅ Orden recomendado de implementación

**NO te dice HOW (cómo)** — TÚ descubrirás eso implementando.

---

### Fase 2: Implementación Step-by-Step (4-8 horas)

Sigue este orden recomendado:

#### a) **apiClient.js** (1-2 horas)
   - [ ] Validar respuestas `response.ok`
   - [ ] Pasar statusCode al error lanzado
   - [ ] Manejar errors de conexión
   - [ ] Tester: Llamadas a /auth/login deben lanzar 401 en credenciales malas

#### b) **ErrorDisplay.jsx** (1-1.5 horas)
   - [ ] Recibir error object desde props
   - [ ] Mostrar statusCode, message
   - [ ] UI diferente por tipo (4xx naranja, 5xx rojo)
   - [ ] Botón de cerrar
   - [ ] Test: Mostrar error 401, 404, 500

#### c) **SuccessDisplay.jsx** (1 hora)
   - [ ] Recibir datos exitosos desde props
   - [ ] Mostrar statusCode 200, mensaje
   - [ ] Mostrar datos adicionales (expandible es bonus)
   - [ ] Botón de cerrar
   - [ ] Test: Mostrar respuesta exitosa

#### d) **LoginSection.jsx** (1.5 horas)
   - [ ] Estados: loading, error, success, user
   - [ ] Implementar handleLogin con try/catch
   - [ ] Mostrar ErrorDisplay si error
   - [ ] Mostrar SuccessDisplay si éxito
   - [ ] Guardar token en localStorage
   - [ ] Test: 
     - Credenciales correctas → entra
     - Credenciales inválidas → error 401

#### e) **ProductsSection.jsx** (1.5 horas)
   - [ ] Estados para: products, error, loading, success
   - [ ] Implementar handleGetProducts()
   - [ ] Implementar handleGetProduct(id)
   - [ ] Implementar handleCheckStock(id)
   - [ ] Mostrar resultados en tabla/lista
   - [ ] Mostrar ErrorDisplay en 404
   - [ ] Test:
     - GET /products → lista completa
     - GET /products/1 → producto individual
     - GET /products/999 → error 404

#### f) **PaymentSection.jsx** (1.5 horas)
   - [ ] Estados: error, loading, success, cardData
   - [ ] Obtener token desde localStorage
   - [ ] Implementar handleValidateCard()
   - [ ] Implementar handleProcessPayment()
   - [ ] Manejar 401 (sin token), 402 (pago rechazado)
   - [ ] Test:
     - Sin token → error 401
     - Monto > 5000 → error 402
     - Datos válidos → éxito

---

### Fase 3: Pruebas Exhaustivas (1-2 horas)

- [ ] Prueba cada componente
- [ ] Genera cada tipo de error (401, 402, 404, 500)
- [ ] Verifica F12 → Network tab
- [ ] Verifica Console no tiene errores sin manejar
- [ ] Usa GUIA_PRUEBAS_COMPLETA.md para casos específicos

---

### Fase 4: Mejoras (BONUS - 2+ horas)

- [ ] Auto-cerrar mensajes después de 3-5 segundos
- [ ] Agregar validaciones en frontend antes de enviar
- [ ] Mejorar CSS/diseño
- [ ] Agregar iconos
- [ ] Animaciones en mensajes
- [ ] Manejo de estados "offline"

---

## Estructura de Ficheros

```
prueba-interceptores/
├── BIENVENIDA.txt                    ← Lee primero
├── GUIA_IMPLEMENTACION.md            ← Empieza aquí
├── MAPA_ERRORES_HTTP.md              ← Referencia
├── GUIA_PRUEBAS_COMPLETA.md          ← Casos de test
│
├── backend/                          ✅ SIN TOCAR (está terminado)
│   ├── package.json
│   ├── server.js
│   └── src/
│       ├── middleware/
│       │   └── errorHandler.js
│       ├── routes/
│       │   ├── auth.js
│       │   ├── products.js
│       │   └── payments.js
│       └── exceptions/
│           ├── AuthenticationException.js
│           ├── PaymentException.js
│           └── ProductNotFoundException.js
│
└── frontend/                         🔨 TU TRABAJO AQUÍ
    ├── package.json
    ├── vite.config.js
    ├── src/
    │   ├── App.jsx                   (ya lista)
    │   ├── index.css                 (ya lista, puedes mejorar)
    │   ├── services/
    │   │   └── apiClient.js          🔨 FALTA implementar error validation
    │   └── components/
    │       ├── ErrorDisplay.jsx      🔨 CREAR desde cero
    │       ├── SuccessDisplay.jsx    🔨 CREAR desde cero
    │       ├── LoginSection.jsx      🔨 COMPLETAR
    │       ├── ProductsSection.jsx   🔨 COMPLETAR
    │       ├── PaymentSection.jsx    🔨 COMPLETAR
    │       └── HealthCheckSection.jsx🔨 COMPLETAR
```

---

## API Backend (Para Referencia)

### Autenticación
- `POST /api/auth/login` - Body: `{username, password}`
- Errores: 401 Unauthorized (credenciales inválidas)

### Productos
- `GET /api/products` - Obtener todos
- `GET /api/products/:id` - Obtener uno
- `GET /api/products/:id/check-stock` - Verificar stock
- Errores: 404 Not Found (ID no existe)

### Pagos
- `POST /api/payments/validate` - Body: `{cardNumber, expiryDate, cvv}`
- `POST /api/payments/process` - Body: `{amount, cardNumber, token}`
  - Header: `Authorization: Bearer <token>`
- Errores: 401 Unauthorized (sin token), 402 Payment Required (pago fallido)

**Ver GUIA_PRUEBAS_COMPLETA.md para todos los detalles y endpoints.**

**Entregable:** Lista de errores comunes y su clasificación en las familias de códigos de respuesta HTTP.

<details>
<summary>Pistas de conocimiento</summary>

- Considera errores relacionados con la autenticación, el pago, la disponibilidad de productos y la gestión de inventario.

</details>

### Fase 2: Implementación de manejo de errores

**Objetivo:** Implementar un sistema para manejar los errores identificados en la fase anterior.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Diseña un sistema para manejar los errores identificados en la fase anterior.
- Implementa la lógica para manejar cada tipo de error de manera apropiada.

**Entregable:** Sistema implementado para manejar los errores identificados.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la mejor manera de informar al usuario sobre el error y cómo manejar la situación en el backend.

</details>

### Fase 3: Pruebas y optimización

**Objetivo:** Probar el sistema de manejo de errores y optimizar su rendimiento.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Realiza pruebas exhaustivas del sistema de manejo de errores.
- Identifica y soluciona cualquier punto de mejora o error no considerado.

**Entregable:** Sistema de manejo de errores probado y optimizado.

<details>
<summary>Pistas de conocimiento</summary>

- Considera escenarios de alta carga y cómo el sistema responde a ellos.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los códigos de respuesta HTTP y por qué son importantes en un sistema de eCommerce?
- **erroresComunes**: ¿Cuáles son los errores comunes que pueden ocurrir en un sistema de eCommerce y cómo los clasificarías?
- **comoSeUsa**: ¿Cómo implementarías un sistema para manejar los errores identificados?
- **queDecisionesImplica**: ¿Qué decisiones tomaste al implementar el sistema de manejo de errores y por qué?

## Criterios de Evaluacion

- Identificar errores comunes en un sistema de eCommerce y clasificarlos en las familias de códigos de respuesta HTTP.
- Implementar un sistema para manejar los errores identificados.
- Probar y optimizar el sistema de manejo de errores.

## Como trabajar con un asistente de IA

- **AGENTS.md** — instrucciones nativas del repo (Cursor, Codex, Copilot, Gemini, Claude Code). Abrí el proyecto y el agente las carga solo.
- **PROMPT_MEJORA.md** — el mismo prompt, para copiar y pegar en un chat (claude.ai, ChatGPT, etc.).

---

*Reto generado automaticamente por Challenge Generator - Pragma*
