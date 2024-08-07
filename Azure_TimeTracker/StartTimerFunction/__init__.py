import logging
import azure.functions as func
import json

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('StartTimerFunction processed a request.')

    try:
        req_body = req.get_json()
        item_id = req_body.get('itemId')

        # Logic to start the timer
        logging.info(f'Starting timer for item {item_id}')

        # Simulate starting a timer, store in a database, etc.
        return func.HttpResponse(json.dumps({"message": "Timer started", "itemId": item_id}), status_code=200)
    except ValueError:
        return func.HttpResponse("Invalid JSON", status_code=400)
    except Exception as e:
        logging.error(f"Error: {e}")
        return func.HttpResponse("Error processing request", status_code=500)
