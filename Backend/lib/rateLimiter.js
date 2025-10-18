import rateLimit from "express-rate-limit";

const strictLimiter = rateLimit({
  windowMs: 1 * 30 * 1000, 
  max: 5,
  message: {
    status: 429,
    message: "Too many login attempts. Try again later!",
  },
  keyGenerator: (req, res) => req.ip, 
});

const looseLimiter = rateLimit({
  windowMs: 1 * 30 * 1000, 
  max: 50,
  message: {
    status: 429,
    message: "Too many requests. Please slow down!",
  },
  keyGenerator: (req, res) => req.ip, 
});

module.exports = { strictLimiter, looseLimiter };
