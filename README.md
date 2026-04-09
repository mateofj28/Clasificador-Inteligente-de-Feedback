# 🧪 Prueba Técnica: Desarrollador de Automatización e Integraciones

Este repositorio contiene la solución al desafío **"Conecta y Automatiza"**, diseñado para demostrar habilidades en integración de sistemas, lógica de programación y uso de Inteligencia Artificial.

---

## 🚀 Descripción del Proyecto

Este flujo de n8n recibe mensajes de feedback de clientes a través de un Webhook y utiliza un LLM (Groq) para clasificar automáticamente el sentimiento como **positivo** o **negativo**.

**¿Qué hace paso a paso?**

1. **Recibir Feedback** — Un Webhook (`POST /feedback`) recibe un JSON con el mensaje del cliente.
2. **Clasificar Sentimiento** — Un agente de IA (modelo Groq: `kimi-k2-instruct`) analiza el mensaje y determina si es positivo o negativo.
3. **Extraer Sentimiento** — Se normaliza la respuesta del LLM y se conserva el mensaje original.
4. **Evaluar Sentimiento** — Se toma una decisión:
   - ❌ **Negativo** → Se registra en una hoja de Google Sheets (mensaje, sentimiento y fecha).
   - ✅ **Positivo** → Se descarta sin acción adicional.

---

## 🛠️ Instrucciones de Despliegue

Sigue estos pasos para poner a funcionar la automatización en tu entorno local:

### 1. Instalación de n8n

Asegúrate de tener instalado [n8n](https://n8n.io/) (puedes usar la versión Desktop o mediante Docker).

### 2. Importar el flujo

1. Descarga el archivo `workflow.json` incluido en este repositorio.
2. En n8n, crea un nuevo flujo y selecciona **"Import from File"** (o simplemente copia el contenido del JSON y pégalo en el lienzo de n8n).

### 3. Configuración de Credenciales

| Servicio | Configuración |
|----------|---------------|
| **IA** | Configura el nodo de IA con tu API Key (ej. Gemini API o Groq para la opción gratuita). |
| **Otras APIs** | Configura los Webhooks o servicios adicionales que utilice el flujo. |

### 4. Ejecución

Haz clic en **"Execute Workflow"** para activar el flujo.

---

## 🧪 Cómo Probarlo

Una vez que el workflow esté activo, envía una petición `POST` al Webhook con un JSON que contenga el campo `mensaje`:

```bash
curl -X POST http://localhost:5678/webhook/feedback \
  -H "Content-Type: application/json" \
  -d '{"mensaje": "El servicio fue terrible, nunca me respondieron"}'
```

**Ejemplo con sentimiento positivo:**

```bash
curl -X POST http://localhost:5678/webhook/feedback \
  -H "Content-Type: application/json" \
  -d '{"mensaje": "Excelente atención, muy rápido y amable"}'
```

**Resultado esperado:**

| Sentimiento | Acción |
|-------------|--------|
| `negativo` | Se guarda el mensaje, sentimiento y fecha en Google Sheets |
| `positivo` | Se descarta con el mensaje: *"Feedback positivo - no requiere acción"* |
