# Host Micro-frontend

This is the host micro-frontend (`host-mfe`) of my bachelor/graduation project.

## Application

More details about the application will be documented soon. However, an overview of the entire application, including more details on the backend, is already available [here](https://github.com/Haggag-dev/SeCBP.back-end/tree/main?tab=readme-ov-file#bachelorgraduation-project).

## Instruction for Running the Frontend

_⚠ Please follow the order of the following instructions_ 

### Pre-requistes
- If you do not have the backend installed and running yet, please follow the instructions provided through [this link](https://github.com/Haggag-dev/SeCBP.back-end/blob/main/README.md#instructions-for-running-the-back-end) before proceeding further.
- [Install pnpm.](https://pnpm.io/installation)

### Order Micro-frontend

1. Clone this repository: https://github.com/Haggag-dev/SeCBP.order-mfe
2. Then execute the following commands:
```sh
  cd order-mfe
  pnpm i
  docker compose -p order-mfe up
```

### Product Micro-frontend

After completing the above step, navigate outside the `order-mfe` project directory and follow these steps:

1. Clone this repository: https://github.com/Haggag-dev/SeCBP.product-mfe
2. Then execute the following commands:
```sh
  cd product-mfe
  pnpm i
  docker compose -p product-mfe up
```

### Host Micro-frontend

After completing the above step, navigate outside the `host-mfe` project directory and follow these steps:

1. Clone this repository: https://github.com/Haggag-dev/SeCBP.host-mfe
2. Then execute the following commands:
```sh
  cd host-mfe
  pnpm i
  docker compose -p host-mfe up
```

_Finally, browse to http://localhost:5001/_

   
