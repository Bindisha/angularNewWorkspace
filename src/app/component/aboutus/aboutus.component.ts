import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval,Subscription,Observable, Observer } from 'rxjs';
import { map,filter } from 'rxjs/operators';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit, OnDestroy {

  private existingSubscription!: Subscription;
  private customObservableSubscription!: Subscription;
  private testSubscription!:Subscription;

  ngOnInit(): void {

    //this.callExistingObservable();
   // this.customOBserverCall();
    this.testCall();


  }

  ngOnDestroy(): void {
    //this.existingSubscription.unsubscribe();
   // this.customObservableSubscription.unsubscribe();
    this.testSubscription.unsubscribe();
  }


  callExistingObservable()
  {
   this.existingSubscription= interval(1000)
    .subscribe({
    next: data=>
    {
      console.log(data);
    },
    error: err => {
        console.log(err)
    },
    complete: ()=>{
      console.log('Completeed')
    }});
  }

  customOBserverCall(){
    const customObseravbale= new Observable(observer => {
      let count =100 ;

      setInterval(()=>{
        observer.next(count);
        if(count==150)
        {
          observer.complete();
        }
        if(count==200)
        {
          observer.error(new Error('count Exceeds'))
        }
        count++;
      },1000);

    });


  this.customObservableSubscription=  customObseravbale
  .pipe(
    filter((data:any)=>{
      return data>105;
    }),
    map((data:number)=>{
    return 'Record : '+ data;
    }
    )

  )
  .subscribe({
      next: data=>{
        console.log(data);
      },
      error: err => {
        console.log('Custom Error');
      },
      complete: ()=>{
        console.log('Completed')
      }
    });

  }

testCall(){
  const testcustomObservable= new Observable(observer => {
  setInterval(
    () => {
      observer.next(Math.floor(Math.random() * 10));
    }, 1000);

});


this.testSubscription=  testcustomObservable
.pipe(
filter((data:any)=>{
  return data<15;
}),
map((data:number)=>{
return 'Record : '+ data;
}
)

)
.subscribe({
  next: data=>{
    console.log(data);
  },
  error: err => {
    console.log('Custom Error');
  },
  complete: ()=>{
    console.log('Completed')
  }
});
}
}
