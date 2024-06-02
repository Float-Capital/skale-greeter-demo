import {
  ChaosGreeterContract_NewGreeting_loader,
  ChaosGreeterContract_NewGreeting_handler,
  ChaosGreeterContract_ClearGreeting_loader,
  ChaosGreeterContract_ClearGreeting_handler,
  // TitanGreeterContract_NewGreeting_loader,
  // TitanGreeterContract_NewGreeting_handler,
  // TitanGreeterContract_ClearGreeting_loader,
  // TitanGreeterContract_ClearGreeting_handler,
} from "../generated/src/Handlers.gen";

import { greetingEntity } from "../generated/src/Types.gen";

ChaosGreeterContract_NewGreeting_loader(({ event, context }) => {
  context.greeting.load(event.params.user.toString());
});

ChaosGreeterContract_NewGreeting_handler(({ event, context }) => {
  let currentGreeter = context.greeting.get(event.params.user);

  if (currentGreeter != null) {
    let greetingObject: greetingEntity = {
      id: event.params.user.toString(),
      latestGreeting: event.params.greeting,
      numberOfGreetings: currentGreeter.numberOfGreetings + 1,
      greetings: [...currentGreeter.greetings, event.params.greeting],
    };

    context.greeting.set(greetingObject);
  } else {
    let greetingObject: greetingEntity = {
      id: event.params.user.toString(),
      latestGreeting: event.params.greeting,
      numberOfGreetings: 1,
      greetings: [event.params.greeting],
    };
    context.greeting.set(greetingObject);
  }
});

ChaosGreeterContract_ClearGreeting_loader(({ event, context }) => {
  context.greeting.load(event.params.user.toString());
});

ChaosGreeterContract_ClearGreeting_handler(({ event, context }) => {
  let currentGreeter = context.greeting.get(event.params.user);

  if (currentGreeter != null) {
    let greetingObject: greetingEntity = {
      id: event.params.user.toString(),
      latestGreeting: "",
      numberOfGreetings: currentGreeter.numberOfGreetings,
      greetings: currentGreeter.greetings,
    };

    context.greeting.set(greetingObject);
  }
});

// TitanGreeterContract_NewGreeting_loader(({ event, context }) => {
//   context.greeting.load(event.params.user.toString());
// });

// TitanGreeterContract_NewGreeting_handler(({ event, context }) => {
//   let currentGreeter = context.greeting.get(event.params.user);

//   if (currentGreeter != null) {
//     let greetingObject: greetingEntity = {
//       id: event.params.user.toString(),
//       latestGreeting: event.params.greeting,
//       numberOfGreetings: currentGreeter.numberOfGreetings + 1,
//       greetings: [...currentGreeter.greetings, event.params.greeting],
//     };

//     context.greeting.set(greetingObject);
//   } else {
//     let greetingObject: greetingEntity = {
//       id: event.params.user.toString(),
//       latestGreeting: event.params.greeting,
//       numberOfGreetings: 1,
//       greetings: [event.params.greeting],
//     };
//     context.greeting.set(greetingObject);
//   }
// });

// TitanGreeterContract_ClearGreeting_loader(({ event, context }) => {
//   context.greeting.load(event.params.user.toString());
// });

// TitanGreeterContract_ClearGreeting_handler(({ event, context }) => {
//   let currentGreeter = context.greeting.get(event.params.user);

//   if (currentGreeter != null) {
//     let greetingObject: greetingEntity = {
//       id: event.params.user.toString(),
//       latestGreeting: "",
//       numberOfGreetings: currentGreeter.numberOfGreetings,
//       greetings: currentGreeter.greetings,
//     };

//     context.greeting.set(greetingObject);
//   }
// });
