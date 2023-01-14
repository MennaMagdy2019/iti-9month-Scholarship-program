#ifndef QUEUE_H
#define QUEUE_H
#include <iostream>
using namespace std;
template <class T>
class Queue
{
    T *items;
    int Size,front,rear;
    public:
        Queue(int Size) {
          this->Size=Size;
          items = new T(Size);
          front = rear =-1;
        }
         void Enqueue(T data){
            // cout<<Size<<endl;
             if((rear+1== front)||(front ==0 && rear==Size-1)){
                    cout<<front<<rear<<endl;
                    cout<<"Queue is Full"<<endl;
                    //return;
                }

             if(front == -1){
                front=rear=0;
            }
            else{
                if(rear==Size-1){rear=0;}
               else
                  rear=rear+1;
            }
           // rear = (rear+1)%size;
             items[rear]=data;


         }

/***************Dequeue Fn************/
         int Dequeue(T &data){

           if(front== -1){
            return 0;
           }
            else{
                data = items[front];
                if(rear == front){
                    front=rear=-1;
                }
                else
                    front=(front+1)%Size;
                /*if(front==Size-1){
                    front=0;
                }
                else
                    front=front+1;
                */
            }
            return data;
           }


         void display(){
             if(front==-1){
                cout<<"Queue is Empty"<<endl;
                return;
             }
             else{

                if(front<=rear){
                      for(int i=front;i<=rear;i++){
                        cout<<items[i]<< " ";
             }
                }
                else{
                    int i;
                    i=0;
                    while(i<=rear){
                        cout<<items[i]<<" ";
                        i++;
                    }

                    i=front;
                    while(i<Size){
                        cout<<items[i]<< " ";
                        i++;
                    }
                }
                cout<<endl;
              /* for(int i=front;i !=(rear);i=(i+1)%Size)
                 {
                     cout<<items[i]<<"  ";
                 }
                cout<<items[rear];*/
             }


         }
    protected:

    private:
};

#endif // QUEUE_H
