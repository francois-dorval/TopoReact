package com.github.dorval.francois.topo.plougastel.util;

import android.content.Context;
import android.widget.Toast;

public class ErrorPopup {


    public static void show(Context context, String s){

            Toast.makeText(context, s,
                    Toast.LENGTH_LONG).show();

    }
}
