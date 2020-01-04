package com.github.dorval.francois.topo.plougastel.util;

import android.content.res.AssetManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;

import java.io.IOException;
import java.io.InputStream;

public class ImageFromAsset {
    public static Bitmap getBitmapFromAssets(AssetManager assets, String fileName) throws IOException {

        InputStream istr = null;
        try {
            istr = assets.open(fileName);
            Bitmap bitmap = BitmapFactory.decodeStream(istr);
            return bitmap;
        } catch (IOException e) {
            e.printStackTrace();
            throw e;

        }finally {
            if (istr!=null){
                istr.close();
            }
        }

    }
}
