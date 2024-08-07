import logging
import azure.functions as func
import json

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('StopTimerFunction processed a request.')

    try:
        req_body = req.get_json()
        item_id = req_body.get('itemId')

        # Logic to stop the timer
        logging.info(f'Stopping timer for item {item_id}')

        # Simulate stopping a timer, update the database, etc.
        return func.HttpResponse(json.dumps({"message": "Timer stopped", "itemId": item_id}), status_code=200)
    except ValueError:
        return func.HttpResponse("Invalid JSON", status_code=400)
    except Exception as e:
        logging.error(f"Error: {e}")
        return func.HttpResponse("Error processing request", status_code=500)
