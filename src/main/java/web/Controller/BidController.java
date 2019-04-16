package web.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import web.Repository.BidRepository;
import web.Entity.Bid;

@RestController
@RequestMapping("/api/bids")
public class BidController {

    @Autowired
    BidRepository repo;

    @GetMapping
    Iterable<Bid> getBids(){
        return repo.findAll();
    }

    @PostMapping
    void addBid(@RequestBody Bid body) {
        repo.save(body);
    }
}