package com.example.demo.Controller;

import com.example.demo.Entity.Link;
import com.example.demo.RedisService;
import com.example.demo.Service.LinkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin(origins = "*",maxAge = 3600)
public class TinyURLController {

    @Autowired
    private LinkService linkService;
    @Autowired
    private RedisService redisService;

    @RequestMapping(value = "/set", method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object Restore(@RequestParam(name = "id", required = true) String id){
        String result =  linkService.Restore(id);
        if(redisService.set(result,id))
          return result;
        else
            return new Object();
    }
    @RequestMapping(value = "/get", method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object Read(@RequestParam(name = "id", required = true) String id){

        return redisService.get(id);
    }

}