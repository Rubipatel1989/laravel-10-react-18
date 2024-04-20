<?php

namespace App\Http\Controllers;
use Exception;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function sendResponse($message = "Action Successfull", $data = null, $responseCode = 200){
        return response()->json(["error" => false, 'message' => $message, 'data' => $data], $responseCode);
    }
    public function sendError($message = "Action Failed", $data = null, $responseCode = 400){
        return response()->json(["error" => true, 'message' => $message, 'data' => $data], $responseCode);
    }
    public function handleException(Exception $e, $sendResponse = true){
        $data['exception_message'] = $e->getMessage();
                $data['exception_code'] = $e->getCode();
                $data['exception_line'] = $e->getLine();
                $data['exception_file'] = $e->getFile();
                //\Log::error("Exception Message:" . json(['data'=>$data]));

                return response()->json(["error" => true, 'message' => $data['exception_message'], 'data' => $data], 403);

    }
}
