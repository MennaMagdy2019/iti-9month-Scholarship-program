#ifndef NODE_H
#define NODE_H

template <class T>
class Node
{
    public:
         T Data;
         Node *next;

        Node(T data) {
        Data = data;
        next=NULL;

        }

    protected:

    private:
};

#endif // NODE_H
