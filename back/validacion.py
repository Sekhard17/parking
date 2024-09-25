from urllib import response
from flask import Flask, request, jsonify
from flask_cors import CORS
from supabase import create_client, Client

app = Flask(__name__)
CORS(app)

url = "https://sobtccfqqbopvqhnjsaz.supabase.co"
key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvYnRjY2ZxcWJvcHZxaG5qc2F6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyMTgyMDcsImV4cCI6MjA0Mjc5NDIwN30.PnA6j9I0_K38vkdB2_wqp8EO0atrs9eCnpNMdjKpiC4"
supabase: Client = create_client(url, key)

@app.route('/validacion', methods=['POST', 'OPTIONS'])
def validacion():
    if request.method == 'OPTIONS':
        return jsonify({"message": "OK"}), 200
    
    try:
        if response : supabase.table("usuarios").select("rut").eq("rut", request.form.get('rut')).execute()
        return jsonify({"error: El rut ya esta resgistrado"}), 40
    
        
        
    
    except Exception as e:
        print(f"Se produjo un error: {str(e)}")
        return jsonify({"error": "Se produjo un error en el servidor."}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5000)


