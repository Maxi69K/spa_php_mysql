<?php 
class QueryBuilder
{
    protected $db;
    public function __construct($db)
    {
        $this->db = $db;
    }
    public function selectAll($table)
    {
        $sql = "SELECT * FROM {$table}";
        $query = $this->db->prepare($sql);
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }
    public function save($data)
    {
        $sql = "INSERT INTO accounts VALUES (NULL,:name,:deposit,:credit_card)";
        $query = $this->db->prepare($sql);
        $query->execute(["name"=> $data->name, "deposit"=> $data->deposit, "credit_card"=> $data->credit_card]);

        if ($query) {
            return "success";
        } else {
            return "error";
        }
    }
}