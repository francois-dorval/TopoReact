package com.github.dorval.francois.topo.plougastel.util;

import android.app.Activity;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.io.InputStream;

public class JsonFileLoader {

    /**
     *
     * @param activity
     * @param filePath
     * @return
     */
    public static JSONObject loadJSONFromAsset(Activity activity, String filePath) throws IOException, JSONException {
        String json = null;
        try {
            InputStream is = activity.getAssets().open(filePath);
            int size = is.available();
            byte[] buffer = new byte[size];
            is.read(buffer);
            is.close();
            json = new String(buffer, "UTF-8");
            return new JSONObject(json);
        } catch (IOException e) {
            e.printStackTrace();
            throw e;
        } catch (JSONException e1) {
            e1.printStackTrace();
            throw e1;
        }
    }
}
